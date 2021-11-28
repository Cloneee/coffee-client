/* eslint-disable import/no-anonymous-default-export */
import { lazy } from "react";

export default {
    path: '/order',
    exact: true,
    public: false,
    component: lazy(()=> import("."))
}