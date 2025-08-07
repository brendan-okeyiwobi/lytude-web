// app/lytude-blog/categories/[categoryId]/blogCategoryView.tsx

import React from "react";
import { BlockBlogRepeaterView } from '../../components/BlogRepeaterViews';
import { Blog } from "@/types/blog";

interface blogCategoryViewProps {
    blogs?: Blog[];
}
function BlogCategoriesView({blogs}: blogCategoryViewProps)  {

  return (
    <div className="inner-content" style={{padding:"20px"}}>
              <BlockBlogRepeaterView blogsArray={blogs} style={{ paddingTop: "0px" }} />
    </div>
  );
}

export default BlogCategoriesView;