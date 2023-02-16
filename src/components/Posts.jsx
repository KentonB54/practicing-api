export const Posts = (props) => {

    const {posts} = props;

    return (
    <div className="contentContainer">
        {
        posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <h4>{post.price}</h4>              
            </div>))
        }          
    </div>
    )
}