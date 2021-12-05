/* eslint-disable import/no-anonymous-default-export */
import { lazy } from "react";

export default {
    path: '/info',
    exact: true,
    public: false,
    component: lazy(()=> import("."))
}