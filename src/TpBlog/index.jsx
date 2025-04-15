import { useHashNavigation } from "./hooks/useHashNavigation"
import { Home } from "./pages/home";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { Header } from "./components/Header";
import { ErrorBoundary } from "react-error-boundary";
import { lazy } from "react";
import { Suspense } from "react";

function TpBlog(){

const {page, param} = useHashNavigation();
const pageContent = getPageContent(page, param);
  
return (<>
  <Header page={page} />
  <div className="container my-4">
    <ErrorBoundary FallbackComponent={PageError}>
      {pageContent}
    </ErrorBoundary>
  
  </div>
</>);
}

function PageError ({error}) {
  return <Alert type="danger">{error.toString()}</Alert>
}

function getPageContent (page, param) {
  if (page === 'home') {
    return <Home />
  }
  if (page === 'contact') {
    return <Contact />
  }
  if (page === 'post') {
    const SingleLazy = lazy(() => import('./pages/Single'))
    return <Suspense fallback={<div>Chargement des composants en cours</div>}><SingleLazy postId={param} /></Suspense>
  }
  return <NotFound page={page}/>
}

export default TpBlog