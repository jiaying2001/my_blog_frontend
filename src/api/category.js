import http from "@/utils/http";

export function getFirstLevelCategoryList(user_id) {
    return http.get("/category/getFirstLevelCategoryList", {
       user_id: user_id
    });
}

export function getSecondLevelCategoryList(parent_id) {
    return http.get("/category/getSecondLevelCategoryList/parent/" + parent_id);
}