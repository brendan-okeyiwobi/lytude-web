// app/lytude-news/categories/[categoryId]/newsCategoryView.tsx

import React from "react";
import { BlockNewsRepeaterView } from '../../components/NewsRepeaterViews';
import { News } from "@/types/news";

interface newsCategoryViewProps {
    news?: News[];
}
function NewsCategoriesView({news}: newsCategoryViewProps)  {

  return (
    <div className="inner-content" style={{padding:"20px"}}>
              <BlockNewsRepeaterView newsArray={news} style={{ paddingTop: "0px" }} />
    </div>
  );
}

export default NewsCategoriesView;