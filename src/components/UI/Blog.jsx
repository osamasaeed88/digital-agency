import React from "react";
import "../../styles/blog.css";
import videoImg from "../../images/video.png";
import articleImg from "../../images/article.png";
import CaseStudy from "../../images/case-study.png";

const blogData = [
  {
    imageUrl: videoImg,
    title: 'Videos',
    desc: 'Our Project Videos',
    linkUrl: '#'
  },
  {
    imageUrl: articleImg,
    title: 'Article',
    desc: 'How to improve your brand interaction with customer',
    linkUrl: '#'
  },
  {
    imageUrl: CaseStudy,
    title: 'Case-Study',
    desc: 'Maximixe your conversation rate..',
    linkUrl: '#'
  }
]

const Blog = () => {
  return (
    <section id="blog" className="blog">
      <div className="container">
        <div className="blog_top-content">
          <h6 className="subtitle">Our Blog</h6>
          <h2>Let's have a look from our
            <span className="highlight"> recent blog</span>
          </h2>
        </div>
        <div className="blog_wrapper">
          {
            blogData.map((item, index) => (
              <div className="blog_item" key={index}>
                <h3>{item.title}</h3>
                <div className="blog_img">
                  <img src={item.imageUrl} alt="" />
                  <p className="description blog_desc">{item.desc}</p>
                  <div className="">
                    <a href={item.linkUrl} className="learn_more"><i class="ri-arrow-right-line"></i></a>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Blog;
