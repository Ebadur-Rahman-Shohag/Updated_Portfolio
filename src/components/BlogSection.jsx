import { blogPosts } from "../data"
import SectionTitle from "./SectionTitle"
import BlogCard from "./BlogCard";


function BlogSection() {
    return (
        <section className="section blog">
            <div className="section-title">
                <SectionTitle text="Blog"/>
                <div className="underline"></div>
            </div>
            <div className="section-center blog-center mt-6 mx-auto">
                {blogPosts.map((post, index) => (
                    <BlogCard key={index} {...post} />
                ))}
            </div>
        </section>
    );
}

export default BlogSection