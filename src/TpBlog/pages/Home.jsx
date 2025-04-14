import { useDocumentTitle } from "../hooks/useDocumentTitle"
import { useFetch } from "../hooks/useFetch"
import { Spinner } from "../components/Spinner"
import { Alert } from "../components/Alert"
import { Card } from "../components/Card"

export function Home () {

    useDocumentTitle('Mon blog')
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10')

    if (loading) {
        return <Spinner />
    }

    if(error){
        return <Alert type="danger">{error.toString()}</Alert>
    }
    return <>
        <h1>Mon blog</h1>
        {loading && <Spinner />}
        {error && <Alert type="danger">{error.toString()}</Alert>}
        {data && <div className="row gap-4">
            {data.map((post) => (<div key={post.id} className="col-12 col-md-4">
                <Card 
                    image={`https://picsum.photos/id/${post.id}/300/180`}
                    title={post.title}
                    description={post.body}
                    href={`#post:${post.id}`}
                    buttonLabel="Voir l'article"
                />
                
                
                </div>))}
            
            </div>}
    </>
}