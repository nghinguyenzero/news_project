import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import ArticlePage from "./pages/ArticlePage/ArticlePage";

const routes =[
    {
        path:'/',
        exact: true,
        main: () =><HomePage/>

    },
    {
        path:'/history',
        exact: true,
        main: () =><HistoryPage/>
    },
    {
        path:'/articles/:id',
        exact: true,
        main: ({match, history}) =><ArticlePage match={match} history={history}/>
    },
    {
        path:'',
        exact: false,
        main: () =><NotFoundPage/>
    }
];
export default routes;