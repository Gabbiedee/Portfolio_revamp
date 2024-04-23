import Image from "next/image";

const MyImages = ({ projectImgs }) => {
  return (
    <Image src={projectImgs}
    alt="Picture of the author"
    width={360}
    height={200}
    quality={100}/>
  )
}

export default MyImages;