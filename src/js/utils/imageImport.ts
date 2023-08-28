export async function importImage(images, imgProp) {
  // const images = import.meta.glob("../assets/images/*.jpg");

  // const imageSource = images[`../assets/images/${img}`]();
  let imgSrc = null;
  for (const path in images) {
    if (path === `../assets/images/${imgProp}`) {
      const func: Function = images[path];
      imgSrc = (await func()).default;
      return imgSrc;
    }
  }
  return imgSrc;
}
