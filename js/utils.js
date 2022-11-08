export const shuffle = (array) => {
   let currentIndex = array.length, randomIndex;

   while (currentIndex != 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
         array[randomIndex], array[currentIndex]];
   }

   return array;
}

export const duplicateArray = (array) => array.reduce((res, current) => res.concat([current, current]), []);

export const createIconsArray = (initialCount) => {
   const cardIcons = [
      'compass',
      'cloud',
      'play',
      'bolt',
      'stop',
      'cogs',
      'atom',
      'basketball-ball'
   ];

   switch (initialCount) {
      case 10:
         return cardIcons.slice(0, 5);
      case 12:
         return cardIcons.slice(0, 6);
      case 14:
         return cardIcons.slice(0, 7);
      case 16:
         return cardIcons;
      default:
         break;
   }
};