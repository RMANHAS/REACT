import Footer from "./Footer";
import Header from "./Header";

export default function Layout({children}) {
  return (
    <div>
        <Header></Header>
        <main style={{backgroundColor:'skyblue'}}>{children}</main>
        <Footer></Footer>
    </div>
  )
}
