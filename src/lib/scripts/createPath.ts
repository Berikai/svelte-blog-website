const turkishToEnglish = (string: string) => {
    return string.replace('Ğ','g')
        .replaceAll('Ü','u')
        .replaceAll('Ş','s')
        .replaceAll('I','i')
        .replaceAll('İ','i')
        .replaceAll('Ö','o')
        .replaceAll('Ç','c')
        .replaceAll('ğ','g')
        .replaceAll('ü','u')
        .replaceAll('ş','s')
        .replaceAll('ı','i')
        .replaceAll('ö','o')
        .replaceAll('ç','c');
};
  
export const createPath = (_id: number, _title: string) => encodeURIComponent(turkishToEnglish(_title).toLowerCase().replaceAll(' ', '-')) + '-' + _id.toString();