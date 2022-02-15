import light from '../../public/image/light.svg'
import dark from '../../public/image/dark.svg'
import Image from 'next/image'
import { useAppContext } from 'hooks/context';


const Content = () => {
  const context = useAppContext()
  return (
    <main className={context.theme}>
      <div className="text">
        <h1> Akiira Official.</h1>
        <p>DarkMode Workshop.</p>
      </div>
      <Image src={context.theme === 'dark' ? dark : light} alt="Logo"></Image>
      {/* <Image src={dark} alt="Logo"></Image> */}
    </main>
  )
}

export default Content;