import { Card } from './components/Card'
import { Create } from './components/Create'

export default async function Home() {
  //Cache: no-store disables NextJS from cacheing the route and reusing that on subsequent loads. If you're getting the same browser results/logs over and over despite making changes, ensure this is there.
  const comments = await fetch('http://localhost:3000/api/comment', { cache: 'no-store' });
  const data = await comments.json();

  return (
    <div className="content">
      <div className="create-form">
        <Create />
      </div>
      <div className="cards">
        {data?.map((comment: any) => {
          return <Card key={comment._id} comment={comment.comment} />
        })}
      </div>
    </div>
  )
}