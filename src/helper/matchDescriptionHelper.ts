
export const matchDescriptionHelper = (key:string | string[]) => {
 
   if(key[0].startsWith("description"))  {
    return "description"
   }
   if(key[0].startsWith("code"))  {
    return "code"
   }
   if(key[0].startsWith("reclaimed"))  {
    return "reclaimed"
   }
   if(key[0].startsWith("variance"))  {
    return "variance"
   }
   if(key[0].startsWith("amountAuthorized"))  {
    return "amountAuthorized"
   }


}
