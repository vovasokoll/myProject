"use strict"
; var main = (function () {
    var photoPosts = [
        {
            id: '1',
            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'sidssad',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['like', 'lol', 'kek', 'chebyrek'],
            likes: ['sidssad','kesha']
        }, {
            id: '2',
            description: 'Lady in Black 🕷',
            createdAt: new Date('2018-02-22T23:00:00'),
            author: 'Иванов',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['like', 'lol', 'kek', 'chebyrek'],
            likes: ['sidssad','kesha']
        }, {
            id: '3',
            description: 'Подписывайтесь на лучшую страницу про МакГрегора - ',
            createdAt: new Date('2018-02-21T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['like', 'lol', 'kek', 'chebyrek'],
            likes: ['sidssad','kesha']
        }
        , {
            id: '4',
            description: 'Shop link in bio @packofslime',
            createdAt: new Date('2018-02-20T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['like', 'lol', 'kek', 'chebyrek'],
            likes: ['sidssad','kesha']
        }
        , {
            id: '5',
            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-19T23:00:00'),
            author: 'Иван',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['like', 'lol', 'kek', 'chebyrek'],
            likes: ['sidssad','kesha']
        }
        , {
            id: '6',
            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-18T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['like', 'lol', 'kek', 'chebyrek'],
            likes: ['sidssad','kesha']
        }
        , {
            id: '7',
            description: 'Второй день European Open Prague🇨🇿',
            createdAt: new Date('2018-02-17T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['like', 'lol', 'kek', 'chebyrek'],
            likes: ['sidssad','kesha']
        }
        , {
            id: '8',
            description: 'Женская сборная Беларуси выиграла эстафету в рамках соревнований по биатлону на Олимпийских играх в Пхёнчхане!!!',
            createdAt: new Date('2018-02-16T23:00:00'),
            author: 'sidssad',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['like', 'lol', 'kek', 'chebyrek'],
            likes: ['sidssad','kesha']
        }
        , {
            id: '9',
            description: 'Свадьбы, корпоративы, дни рождения от перспективного агентства ведущих подрастешка2.0))))) ',
            createdAt: new Date('2018-02-15T23:00:00'),
            author: 'sidssad',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['like', 'lol', 'kek', 'chebyrek'],
            likes: ['sidssad','kesha']
        }
        , {
            id: '10',
            description: 'Тварожнiк з чарнiцамi для цудоýнага настрою❤',
            createdAt: new Date('2018-02-14T23:00:00'),
            author: 'sidssad',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['like', 'lol', 'kek', 'chebyrek'],
            likes: ['sidssad','kesha']
        }
        , {
            id: '11',
            description: 'Тем временем я хожу по стенам',
            createdAt: new Date('2018-02-13T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['like', 'lol', 'kek', 'chebyrek'],
            likes: ['sidssad','kesha']
        }
        , {
            id: '12',
            description: 'Вы когда-нибудь чувствовали, что не можете ничего сделать? Я недавно ощутила. Опустим даже тот факт, что я не люблю долго ждать результата.',
            createdAt: new Date('2018-02-12T23:00:00'),
            author: 'sidssad',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['like', 'lol', 'chebyrek'],
            likes: ['sidssad','kesha']
        }
        , {
            id: '13',
            description: 'с Пинска! И такое бывает🙄 Душевная и эмоциональная поездка❤😊',
            createdAt: new Date('2018-02-11T23:00:00'),
            author: 'Иванов Иван',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['like', 'lol', 'kek', 'chebyrek'],
            likes: ['sidssad','kesha']
        }
    ];

    function getPhotoPosts(skip, top, filterConfig) {
        photoPosts.sort(compDate);
        skip = skip || 0;
        top = top || 10;
        filterConfig = filterConfig || {};
        var answerPosts = photoPosts;
        if (filterConfig.author) {
            answerPosts = answerPosts.filter(item => item['author'] === filterConfig.author);
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
        return photoPosts.findIndex((item,i,photoPosts) => item.id === id);;
    }
    function getPhotoPost(id) {
        return photoPosts.find((item,i,photoPosts) => item.id === id);
    }
    function removePhotoPost(id) {
        var indexPost = getIndexPhotoPost(id);
        if (indexPost !== -1) {
            photoPosts.splice(indexPost, 1);
            return true;
        }
        else {
            return false;
        }
    }

    var validator = {
        id: function (id) {
            return (typeof id === 'string') && id !== '';
        },
        createdAt: function (date) {
            return date && Object.prototype.toString.call(date) === '[object Date]';
        },
        description: function (description) {
            return true;
            //return (typeof description === 'string');
        },
        author: function (author) {
            return typeof author === 'string' && author !== '';
        },
        photoLink: function (photoLink) {
            return typeof photoLink === 'string' && photoLink !== '';
        },
        likes: function (likes) {
            return Array.isArray(likes);
        },
        hashTags: function (hashTags) {
            return Array.isArray(hashTags);
        }
    }
    function validatePhotoPost(post) {
        var fields = Object.keys(validator);
        var correct = true;
        fields.forEach(function (element) {
            correct &= validator[element](post[element]);
        });
        return correct;
    }
    function editPhotoPost(id, post) {
        var indexPost = getIndexPhotoPost(id);
        if (indexPost !== -1) {
            var tempPhotoPost = Object.assign({}, photoPosts[indexPost]);
            if (validator.description(post.description)) {
                tempPhotoPost.description = post.description;
            }
            if (validator.photoLink(post.photoLink)) {
                tempPhotoPost.photoLink = post.photoLink;
            }
            if (validator.hashTags(post.hashTags)) {
                tempPhotoPost.hashTags = post.hashTags;
            }
            if (validatePhotoPost(tempPhotoPost)) {
                photoPosts[indexPost] = Object.assign({},tempPhotoPost); //??????????
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
        getIndexPhotoPost:getIndexPhotoPost,
        getPhotoPosts: getPhotoPosts,
        getPhotoPost: getPhotoPost,
        validatePhotoPost: validatePhotoPost,
        addPhotoPost: addPhotoPost,
        editPhotoPost: editPhotoPost,
        removePhotoPost: removePhotoPost
    };
}());
