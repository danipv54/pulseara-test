let variance={}

export const formFieldsHelper = (dirtyfields: any, fields: any) => {
  variance= dirtyfields.map((f: any) => {
    return{

      [f]: fields[f],
      
    }
  });


  return variance
  
};
