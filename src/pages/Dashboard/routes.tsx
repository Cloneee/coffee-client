/* eslint-disable import/no-anonymous-default-export */
import { lazy } from "react";

export default {
    path: '/dashboard',
    exact: true,
    public: false,
    component: lazy(()=> import("."))
}