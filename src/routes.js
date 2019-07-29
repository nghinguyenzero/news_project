import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import NewsPage from "./pages/NewsPage/NewsPage";


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
        path:'/newsList/:id',
        exact: true,
        main: ({match, history}) =><NewsPage match={match} history={history}/>
    },
    {
        path:'',
        exact: false,
        main: () =><NotFoundPage/>
    }
];
export default routes;