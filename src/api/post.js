import http from "@/utils/http"

export function getLatestNPostsByType(type, number) {
    return http.get("/post/" + number + "/latest?type=" + type);
}

export function countPosts(type, category_id) {
    return http.get("/post/countPosts", {type: type, category_id:category_id});
}

export function getPostsByCategoryId(category_id) {
    return http.get("/post/getPostsByCategoryId/" + category_id)
}

export function getLatestPostsByCategoryIdAndType(type, category_id) {
    return http.get("/post/getLatestPostsByCategoryIdAndType?type=" + type + "&" + "category_id=" + category_id);
}

export function getPosts(type, category_id, quantity) {
    return http.get("/post/get", {
        type: type,
        category_id: category_id,
        quantity: quantity
    });
}

export function getPostById(id) {
    return http.get("/post/getById", {
        id: id
    });
}