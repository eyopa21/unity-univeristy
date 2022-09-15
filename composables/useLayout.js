export default function() {
    return useState("state", () => {
        return {
            showModal: false,
            project: "",
            blogs: "",
        };
    });
}