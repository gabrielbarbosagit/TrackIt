import React from "react";
import { Loading } from "../Loading/Loading";


export const PageWithLoading = ({ isLoading, children }) => {

    return isLoading ? <Loading /> : children;


};;