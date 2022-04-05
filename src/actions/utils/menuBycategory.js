const MenuBycategory = async (menus) => {
    
   return await menus.reduce((group, product) => {
      const { category } = product;
      group[category] = group[category] ?? [];
      group[category].push(product);
      return group;
    }, {});
}
export default MenuBycategory