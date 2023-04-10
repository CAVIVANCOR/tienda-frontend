// import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import {GET_REPOSITORIES} from '../graphql/queries'
// import axios from "axios";

const useRepositories=()=>{
    // const [repositories, setRepositories]= useState(null)

    const {data={}, loading, refetch} = useQuery(GET_REPOSITORIES);
    const {repositories=null}=data;


    // const fetchRepositories = async ()=>{
    //     try {
    //         const response = (await axios.get('http://192.168.18.15:5000/api/repositories')).data;
    //         setRepositories(response);
    //     } catch (error) {
    //         console.log(error)
    //     }
    // };

    // useEffect(()=>{
    //     fetchRepositories()
    // },[]);

    const repositoriesNodes = repositories
        ? repositories.edges.map(edge=>edge.node)
        :[];

    return {loading, repositories:repositoriesNodes, refetch};
}
export default useRepositories;
