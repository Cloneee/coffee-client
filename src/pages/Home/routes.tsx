/* eslint-disable import/no-anonymous-default-export */
import { lazy } from "react";

export default {
    path: '/home',
    exact: true,
    public: true,
    component: lazy(()=> import("."))
}