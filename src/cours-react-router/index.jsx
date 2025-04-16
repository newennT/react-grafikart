import { createBrowserRouter, NavLink, Link, Outlet, RouterProvider, useRouteError, useNavigation } from "react-router-dom";
import { Single } from "./pages/Single";
import { Blog } from "./pages/Blog";
import { Spinner } from "./components/Spinner";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <PageError/>,
        children: [
            {
                path: 'blog',
                element: <div className="row">
                    <aside className="col-3">
                        <h2>Sidebar</h2>
                    </aside>
                    <main className="col-9">
                        <Outlet />
                    </main>
                </div>,
                children: [
                    {
                        path: '',
                        element: <Blog />,
                        loader: () => fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
                    },
                    {
                        path: ':id',
                        element: <Single />
                    }
                ]
            },
            {
                path: 'contact',
                element: <div>Contact</div>
            }
        ]
    }
]);

function Root () {
    const {state} = useNavigation()
    return <>
        <header>
            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </header>
        <div className="container my-4">
            {state === 'loading' && <Spinner />}
            <Outlet />
        </div>
    </>
}

function PageError(){
    const error = useRouteError()
    console.log(error)
    return <>
        <h1>Oupsie</h1>
        <p>{error?.error?.toString() ?? error?.toString() }</p>
    </>
}


function CoursReactRouter(){
    return <RouterProvider router={router} />
}

export default CoursReactRouter