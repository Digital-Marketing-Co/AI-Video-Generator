export type AppRole="USER"|"ADMIN"|"SUPER_ADMIN";
export type AuthenticatedPrincipal={userId:string;email:string;role:AppRole};
export class AuthorizationError extends Error{status=403 as const}
export function requireRole(principal:AuthenticatedPrincipal|null|undefined,allowed:AppRole[]){
  if(!principal || !allowed.includes(principal.role)) throw new AuthorizationError("Forbidden");
  return principal;
}
export function requireSuperAdmin(principal:AuthenticatedPrincipal|null|undefined){return requireRole(principal,["SUPER_ADMIN"])}
export function isConfiguredSuperAdmin(email:string){
  const allowed=(process.env.SUPER_ADMIN_EMAILS??"").split(",").map(v=>v.trim().toLowerCase()).filter(Boolean);
  return allowed.includes(email.trim().toLowerCase());
}
