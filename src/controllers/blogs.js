exports.createBlog = (req, res, next) => {
    const title = req.body.name;
    // const image = req.body.email;
    const body = req.body.body;
        const result = {
            message: 'Create Blog success!',
            data: {
                id_post: 1,
                title:"Title Blog",
                // image: "image.jpg",
                body: "Qui sunt occaecat cillum ad veniam nulla non ex. Laborum eu incididunt tempor laboris quis ut aliquip incididunt consectetur. Aute cillum velit aliquip Lorem qui ipsum pariatur et eiusmod labore nostrud irure pariatur. Consectetur enim do velit veniam elit qui. Quis fugiat id minim cillum culpa excepteur laboris proident sit nulla ullamco id anim. Occaecat aliquip mollit dolore eiusmod commodo officia nulla enim mollit. Id qui commodo consequat officia deserunt consectetur culpa enim proident incididunt culpa.",
                create_at : "12/2/2022",
                author: {
                    uid: 1,
                    name: "Yusron"
                }

    
            }
        }
        res.status(201).json(result)
}