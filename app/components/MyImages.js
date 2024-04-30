import Image from "next/image";

const MyImages = ({ projectImgs }) => {
  return (
    <Image 
    src={projectImgs}
    alt="Picture of the author"
    width={0}
    height={0}
    sizes="100vw"
    style={{width: '100%', height: '60%'}}/>
  )
}

export default MyImages;