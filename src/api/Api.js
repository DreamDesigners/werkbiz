let Base_Url = ``;
if (process.env.REACT_APP_NODE_ENV === "production") {
    Base_Url = `https://admin-api.taskmo.co/api`;
} else if (process.env.REACT_APP_NODE_ENV === "development") {
    Base_Url = `https://admin-api-dev.task.task-mo.com/api`;
} else {
    Base_Url = `http://localhost:8004/api`;
}

console.log(Base_Url)
export const createSubscriberApi = `${Base_Url}/create-subscriber`;

export const getBlogApi = `${Base_Url}/blog-slug`;
export const getBlogsApi = `${Base_Url}/blogs`;
export const getBlogCategoriesApi = `${Base_Url}/blog-categories`;

export const getJobApi = `${Base_Url}/portal-job`;
export const getJobsApi = `${Base_Url}/portal-jobs`;
export const getJobCategoriesApi = `${Base_Url}/career-categories`;
export const createImageUrlApi = `${Base_Url}/create-url`;

export const getNewsApi = `${Base_Url}/news`;
export const getAllNewsApi = `${Base_Url}/all-news`;
export const createNewsApi = `${Base_Url}/create-email-subscriber`;

export const getCasestudyApi = `${Base_Url}/case-study-slug`;
export const getAllCasestudyApi = `${Base_Url}/case-studies`;
export const getCasestudyCategoriesApi = `${Base_Url}/case-study-categories`;
