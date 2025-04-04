import { useHashNavigation } from "./hooks/useHashNavigation"
import { Home } from "./pages/home";
import { Contact } from "./pages/Contact";
import { Single } from "./pages/Single";

function TpBlog(){

const {page} = useHashNavigation();
const pageContent = getPageContent(page);
  
return (<>
  <p>
    Page : {page}
    <a href="#">Home</a>
    <a href="#post">Article</a>
    <a href="#contact">Contact</a>
  </p>
  {pageContent}
</>);
}

function getPageContent (page) {
  if (page === 'home') {
    return <Home />
  }
  if (page === 'contact') {
    return <Contact />
  }
  if (page === 'post') {
    return <Single />
  }
  return <NotFound page={page}/>
}

export default TpBlog