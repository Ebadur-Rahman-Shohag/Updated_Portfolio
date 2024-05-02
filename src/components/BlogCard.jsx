

function BlogCard({ title, description, imageUrl, authorImg, readTime }) {
    return (
        <div className="card">
            <div className="card-side card-front">
                <img src={imageUrl} alt="Blog post cover" />
                <div className="card-info">
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <div className="card-footer">
                        <img src={authorImg} alt="Author" />
                        <p>{readTime} min read</p>
                    </div>
                </div>
            </div>
            <div className="card-side card-back">
                <button className="btn">read more</button>
            </div>
        </div>
    );
}

export default BlogCard;
