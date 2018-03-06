; var main = (function () {
    var photoPosts = [
        {
            id: '1',
            descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'sidssad',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['like', 'lol', 'kek', 'chebyrek']
        }, {
            id: '2',
            descriprion: 'Lady in Black 🕷',
            createdAt: new Date('2018-02-22T23:00:00'),
            author: 'Иванов',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['like', 'lol', 'kek', 'chebyrek']
        }, {
            id: '3',
            descriprion: 'Подписывайтесь на лучшую страницу про МакГрегора - ',
            createdAt: new Date('2018-02-21T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['like', 'lol', 'kek', 'chebyrek']
        }
        , {
            id: '4',
            descriprion: 'Shop link in bio @packofslime',
            createdAt: new Date('2018-02-20T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['like', 'lol', 'kek', 'chebyrek']
        }
        , {
            id: '5',
            descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-19T23:00:00'),
            author: 'Иван',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['like', 'lol', 'kek', 'chebyrek']
        }
        , {
            id: '6',
            descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-18T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['like', 'lol', 'kek', 'chebyrek']
        }
        , {
            id: '7',
            descriprion: 'Второй день European Open Prague🇨🇿',
            createdAt: new Date('2018-02-17T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['like', 'lol', 'kek', 'chebyrek']
        }
        , {
            id: '8',
            descriprion: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-16T23:00:00'),
            author: 'sidssad',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['like', 'lol', 'kek', 'chebyrek']
        }
        , {
            id: '9',
            descriprion: 'Свадьбы, корпоративы, дни рождения от перспективного агентства ведущих подрастешка2.0))))) ',
            createdAt: new Date('2018-02-15T23:00:00'),
            author: 'sidssad',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['like', 'lol', 'kek', 'chebyrek']
        }
        , {
            id: '10',
            descriprion: 'Тварожнiк з чарнiцамi для цудоýнага настрою❤',
            createdAt: new Date('2018-02-14T23:00:00'),
            author: 'sidssad',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['like', 'lol', 'kek', 'chebyrek']
        }
        , {
            id: '11',
            descriprion: 'Тем временем я хожу по стенам',
            createdAt: new Date('2018-02-13T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['like', 'lol', 'kek', 'chebyrek']
        }
        , {
            id: '12',
            descriprion: 'Вы когда-нибудь чувствовали, что не можете ничего сделать? Я недавно ощутила. Опустим даже тот факт, что я не люблю долго ждать результата.',
            createdAt: new Date('2018-02-12T23:00:00'),
            author: 'sidssad',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['like', 'lol', 'chebyrek']
        }
        , {
            id: '13',
            descriprion: 'с Пинска! И такое бывает🙄 Душевная и эмоциональная поездка❤😊',
            createdAt: new Date('2018-02-11T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['like', 'lol', 'kek', 'chebyrek']
        }
    ];

    function getPhotoPosts(skip, top, filterConfig) {
        photoPosts.sort(compDate);
        skip = skip || 0;
        top = top || 10;
        filterConfig = filterConfig || {};
        var answerPosts = photoPosts;
        if (filterConfig.author) {
            answerPosts = answerPosts.filter(item => item['author'] == filterConfig.author);
        }
        if (filterConfig.hashTags) {
            for (var i = 0; i < filterConfig.hashTags.length; i++) {
                answerPosts = answerPosts.filter(item => item['hashTags'].includes(filterConfig.hashTags[i]));
            }
        }
        if (filterConfig.dateFrom) {
            answerPosts = answerPosts.filter(item => item['createdAt'] >= filterConfig.dateFrom);
        }
        if (filterConfig.dateTo) {
            answerPosts = answerPosts.filter(item => item['createdAt'] <= filterConfig.dateTo);
        }
        return answerPosts.slice(skip, top + skip);
    }
    function compDate(element1, element2) {
        return element2.createdAt - element1.createdAt;
    }
    function getIndexPhotoPost(id) {
        for (var i = 0; i < photoPosts.length; i++) {
            if (photoPosts[i].id == id) {
                return i;
            }
        }
        return -1;
    }
    function getPhotoPost(id) {
        var indexPost = getIndexPhotoPost(id);
        if (index != -1) {
            return photoPosts[indexPost];
        }
        else {
            return null;
        }
    }
    function removePhotoPost(id) {
        var indexxPost = getIndexPhotoPost(id);
        if (index != -1) {
            photoPosts.splice(index, 1);
            return true;
        }
        else {
            return false;
        }
    }

    function validateField(post, field) {
        var correct = (typeof post[field] === 'string');
        if (post[field] == undefined) {
            correct = false;
        }
        if (field != 'description' && field != 'hashTags') {
            correct &= (post[field] != '');
        }
        return correct;
    }
    function validateDate(post) {
        if (post['createdAt'] || Object.prototype.toString.call(post['createdAt']) != '[object Date]') {
            return false;
        }
        else {
            return true;
        }
    }
    function validateHashtags(post) {
        if (!post['hashTags']) {
            return false;
        }
        return true;
    }
    function validatePhotoPost(post) {
        var correct = true;
        correct &= validateField(post, 'id');
        correct &= validateField(post, 'description');
        correct &= validateField(post, 'author');
        correct &= validateField(post, 'photoLink');
        correct &= validateHashtags(post);
        correct &= validateDate(post);
        return correct;
    }
    function editPhotoPost(id, post) {
        var indexPost = getIndexPhotoPost(id);
        if (index != -1) {
            if (post.descriprion) {
                photoPosts[i].descriprion = post.descriprion;
            }
            if (post.photoLink) {
                photoPosts[i].photoLink = post.photoLink;
            }
            if (post.hashTags) {
                photoPosts[i].hashTags = post.hashTags;
            }
            if (validatePhotoPost(photoPosts[i])) {
                photoPosts.splice(indexPost, 1, post);
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    function addPhotoPost(post) {
        if (validatePhotoPost(post)) {
            photoPosts.push(post);
            return true;
        }
        return false;
    }
    return {
        getPhotoPosts: getPhotoPosts,
        validatePhotoPost: validatePhotoPost,
        addPhotoPost: addPhotoPost,
        editPhotoPost: editPhotoPost,
        removePhotoPost: removePhotoPost
    };
}());
