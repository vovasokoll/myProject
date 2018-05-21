"use strict"
;
var photoPosts = [
    {
        id: '1',
        description: 'Hello friends!The new release is already on the channel!',
        createdAt: new Date('2018-02-23T23:12:33'),
        author: '_ivanurgant',
        photoLink: 'images/women.jpg',
        hashTags: ['like', 'lol', 'kek', 'chebyrek'],
        likes: ['sidssad', 'kesha']
    }, {
        id: '2',
        description: 'Mignons are funny funny creatures in shape resembling pills. The history of their origin goes to the beginning of the origin',
        createdAt: new Date('2018-02-22T23:12:33'),
        author: 'Иванов',
        photoLink: 'images/eyes.jpeg',
        hashTags: ['like', 'lol', 'kek', 'chebyrek'],
        likes: ['sidssad', 'kesha']
    }, {
        id: '3',
        description: ' We would like to share our love and happiness. We have been blessed two times over. We are incredibly grateful that our family will be growing by two, and we thank you for your well wishes. - The Carters',
        createdAt: new Date('2018-02-21T23:12:33'),
        author: 'Иванов Иван',
        photoLink: 'images/белка.jpg',
        hashTags: ['like', 'lol', 'kek', 'chebyrek'],
        likes: ['sidssad', 'kesha']
    }
    , {
        id: '4',
        description: 'Feliz por haber alcanzado los 300 goles en la Liga Española por el Real Madrid. Vamos equipo!👍🏽',
        createdAt: new Date('2018-02-20T23:12:33'),
        author: 'sidssad',
        photoLink: 'images/i am.png',
        hashTags: ['like', 'lol', 'kek', 'chebyrek'],
        likes: ['sidssad', 'kesha']
    }
    , {
        id: '5',
        description: ' Thank you @harpersbazaarus and @alexilubomirski! And so grateful to @katherinelangford for the interview- link in bio. Wearing\n' +
        '                    @coach by @stuartvevers. And also thanks to my team @kateyoung @hungvanngo @officialdanilohair @tombachik\n' +
        '                    😍',
        createdAt: new Date('2018-02-19T23:12:33'),
        author: 'sidssaddddddd',
        photoLink: 'images/dog.jpg',
        hashTags: ['like', 'lol', 'kek', 'chebyrek'],
        likes: ['sidssad', 'kesha']
    }
    , {
        id: '6',
        description: 'ransitioning into full mount. The second most dominant position in fighting. After back mount top.',
        createdAt: new Date('2018-02-18T23:12:33'),
        author: 'sok0liik',
        photoLink: 'images/cow.jpg',
        hashTags: ['like', 'lol', 'kek', 'chebyrek'],
        likes: ['sidssad', 'kesha']
    }
    , {
        id: '7',
        description: 'The what have you done for me lately business. Stay strong and stay ready ❤',
        createdAt: new Date('2018-02-17T23:12:33'),
        author: 'kesha',
        photoLink: 'images/philin.jpg',
        hashTags: ['like', 'lol', 'kek', 'chebyrek'],
        likes: ['sidssad', 'kesha', 'fdg', 'dsf', 'dsfsdf']
    }
    , {
        id: '8',
        description: 'I am happy for Floyd and his recent announcement that he is out of these current fight negotiations. It is the reason I never\n' +
        '                    seeked the rematch in the first place. I was happy for him in retirement. My game is a very unforgiving\n' +
        '                    one. It is not like other games. I understand completely him staying retired. I will now carry on in\n' +
        '                    my negotiations and see where it goes. Have a great retirement Junior. Now come here and give your old\n' +
        '                    man a hug for old times sake. I\'m proud of you son. Yours truly, Senior.',
        createdAt: new Date('2018-02-16T23:12:33'),
        author: 'sidssad',
        photoLink: 'images/monkey.jpg',
        hashTags: ['like', 'lol', 'kek', 'chebyrek'],
        likes: ['sidssad', 'kesha']
    }
    , {
        id: '11',
        description: 'Hello friends!The new release is already on the channel!',
        createdAt: new Date('2018-02-23T23:12:33'),
        author: '_ivanurgant',
        photoLink: 'images/women.jpg',
        hashTags: ['like', 'lol', 'kek', 'chebyrek'],
        likes: ['sidssad',]
    }, {
        id: '12',
        description: 'Mignons are funny funny creatures in shape resembling pills. The history of their origin goes to the beginning of the origin',
        createdAt: new Date('2018-02-22T23:12:33'),
        author: 'vaner',
        photoLink: 'images/eyes.jpeg',
        hashTags: ['like', 'lol', 'kek', 'chebyrek'],
        likes: ['sidssad', 'kesha']
    }, {
        id: '13',
        description: ' We would like to share our love and happiness. We have been blessed two times over. We are incredibly grateful that our family will be growing by two, and we thank you for your well wishes. - The Carters',
        createdAt: new Date('2018-02-21T23:12:33'),
        author: 'bomm',
        photoLink: 'images/белка.jpg',
        hashTags: ['like', 'lol', 'kek', 'chebyrek'],
        likes: ['sidssad', 'kesha']
    }
    , {
        id: '14',
        description: 'Feliz por haber alcanzado los 300 goles en la Liga Española por el Real Madrid. Vamos equipo!👍🏽',
        createdAt: new Date('2018-02-20T23:12:33'),
        author: 'boomer',
        photoLink: 'images/i am.png',
        hashTags: ['like', 'lol', 'kek', 'chebyrek'],
        likes: ['sidssad', 'kesha']
    }
    , {
        id: '15',
        description: ' Thank you @harpersbazaarus and @alexilubomirski! And so grateful to @katherinelangford for the interview- link in bio. Wearing\n' +
        '                    @coach by @stuartvevers. And also thanks to my team @kateyoung @hungvanngo @officialdanilohair @tombachik\n' +
        '                    😍',
        createdAt: new Date('2018-02-19T23:12:33'),
        author: 'hhfsdhfsh',
        photoLink: 'images/dog.jpg',
        hashTags: ['like', 'lol', 'kek', 'chebyrek'],
        likes: ['sidssad', 'kesha', 'sdff']
    }
    , {
        id: '16',
        description: 'ransitioning into full mount. The second most dominant position in fighting. After back mount top.',
        createdAt: new Date('2018-02-18T23:12:33'),
        author: 'Иванов Иван',
        photoLink: 'images/cow.jpg',
        hashTags: ['like', 'lol', 'kek', 'chebyrek'],
        likes: ['sidssad', 'kesha', 'sdf']
    }
    , {
        id: '17',
        description: 'The what have you done for me lately business. Stay strong and stay ready ❤',
        createdAt: new Date('2018-02-17T23:12:33'),
        author: 'Иванов Иван',
        photoLink: 'images/philin.jpg',
        hashTags: ['like', 'lol', 'kek', 'chebyrek'],
        likes: ['sidssad', 'kesha']
    }
    , {
        id: '18',
        description: 'I am happy for Floyd and his recent announcement that he is out of these current fight negotiations. It is the reason I never\n' +
        '                    seeked the rematch in the first place. I was happy for him in retirement. My game is a very unforgiving\n' +
        '                    one. It is not like other games. I understand completely him staying retired. I will now carry on in\n' +
        '                    my negotiations and see where it goes. Have a great retirement Junior. Now come here and give your old\n' +
        '                    man a hug for old times sake. I\'m proud of you son. Yours truly, Senior.',
        createdAt: new Date('2018-02-16T23:12:33'),
        author: 'sidssad',
        photoLink: 'images/monkey.jpg',
        hashTags: ['like', 'lol', 'kek', 'chebyrek'],
        likes: ['sidssad', 'kesha']
    }
];
var USER = "sidssad";
var main = (function () {

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
                answerPosts = answerPosts.filter(item => item['hashTags'].includes(filterConfig.hashTags[i]))
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

    function getPhotoPostID(id) {
        return photoPosts.findIndex((item, i, photoPosts) => item.id === id);
    }

    function getPhotoPost(id) {
        return photoPosts.find((item, i, photoPosts) => item.id === id);
    }

    function getIndexPost(post) {
        return photoPosts.indexOf(post);
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

    function editPhotoPost(post, id) {
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
                photoPosts[indexPost] = Object.assign({}, tempPhotoPost); //??????????
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

    var getNames = () => {
        return photoPosts.map(post => post.author).filter((name, indx, self) => self.indexOf(name) === indx);
    };

    var getHashTags = () => {
        var hashtags = [];
        photoPosts.forEach(post => post.hashTags.forEach(tag => hashtags.push(tag)));
        return hashtags;
    };
    return {
        getPhotoPostID: getPhotoPostID,
        getPhotoPosts: getPhotoPosts,
        getPhotoPost: getPhotoPost,
        validatePhotoPost: validatePhotoPost,
        addPhotoPost: addPhotoPost,
        editPhotoPost: editPhotoPost,
        getIndexPost: getIndexPost,
        removePhotoPost: removePhotoPost,
        getNames: getNames,
        getHashTags: getHashTags
    };
}());

var DOMActions = (function () {
    var generateDate = (date) => {
        return new Date(date.year, date.month, date.date, date.hours, date.minutes, date.seconds, date.ms);
    };
    var generateDescriptions = (description) => {
        if (description.length > 70) {
            return description.substr(0, 70) + '...';
        }
        return description;
    };
    var generateHashTags = (hashTags) => {
        var ans = '';
        hashTags.forEach(tag => ans += ('#' + tag) + ' ');
        return ans;
    };
    var generatePhotoPost = (post) => {
        var item = document.getElementById("photo_temp").content.querySelector('div');
        var answer = document.importNode(item, true);

        answer.getElementsByClassName('image-photo')[0].src = post.photoLink;
        if (post.author === USER) {
            answer.getElementsByClassName('button-edit')[0].style.visibility = 'visible';
            answer.getElementsByClassName('button-delete')[0].style.visibility = 'visible';
        }
        answer.getElementsByClassName('username')[0].textContent = post.author;
        answer.getElementsByClassName('panel-number-like')[0].textContent = post.likes.length;
        answer.getElementsByClassName('tag')[0].textContent = generateHashTags(post.hashTags);
        answer.getElementsByClassName('panel-date-upload')[0].textContent = generateDate(post.createdAt);
        answer.getElementsByClassName('comment')[0].textContent = generateDescriptions(post.description);
        return answer;
    };
    var generatePhotoPosts = (listPost) => {
        var lenta = document.getElementById('lenta');
        lenta.innerHTML = '';
        listPost.forEach(post => {
            var postDOM = generatePhotoPost(post);
            lenta.appendChild(postDOM);
        });
    };
    var generateLog = () => {
        var headEle = document.getElementById('name-user');
        var name = headEle.getElementsByClassName('authorized-username');
        var sig = document.getElementsByClassName('button-sigin');
        var exit = document.getElementsByClassName('button-exit');
        if (USER) {
            name[0].textContent = USER;
            headEle.style.visibility = 'visibility';
            sig[0].style.visibility = 'hidden';
            exit[0].style.visibility = 'visibility';
        }
        else {
            exit[0].style.visibility = 'hidden';
            headEle.style.visibility = 'hidden';
            sig[0].style.visibility = 'visibility';
        }
    };
    var generateNameList = (listNames) => {
        let root = document.getElementById('name-list');
        listNames.forEach(name => {
            let option = document.createElement('option');
            option.textContent = name;
            root.appendChild(option);
        })
    };
    var generateTagList = (listHashTags) => {
        var root = document.getElementById('by-hashtag');
        listHashTags.forEach(tag => {
            let option = document.createElement('option');
            option.textContent = tag;
            root.appendChild(option);
        })
    };
    var addPhotoPost = (post, index) => {
        var posts = document.getElementsByClassName('post');
        if (index < posts.length && index > -1) {
            var postDOM = generatePhotoPost(post);
            var next = posts[index];
            next.before(postDOM);
            posts[posts.length - 1].remove();
        }
    };
    var removePhotoPost = (index) => {
        var posts = document.getElementsByClassName('post');
        if (index < posts.length && index > -1) {
            posts[index].remove();
        }
    };
    var editPhotoPost = (post, index) => {
        var posts = document.getElementsByClassName('post');
        if (index < posts.length && index > -1) {
            posts[index].replaceWith(generatePhotoPost(post));
        }
    };
    return {
        generateLog: generateLog,
        generatePhotoPosts: generatePhotoPosts,
        generateNameList: generateNameList,
        addPhotoPost: addPhotoPost,
        removePhotoPost: removePhotoPost,
        editPhotoPost: editPhotoPost,
        generateTagList: generateTagList
    }
})();

var genPhotoPosts = () => {
    var skip = 0;
    var top = 10;
    var dateFrom = document.getElementById('by-date-since').value;
    var dateTo = document.getElementById('by-date-to').value;
    var filterConfig = {
        author: document.getElementById('filt-input-name').value,
        dateFrom: dateFrom.length > 0 ? new Date(dateFrom) : null,
        dateTo: dateTo.length > 0 ? new Date(dateTo) : null,
        hashtag: document.getElementsByClassName('by-hashtag')[0].value
    };
    console.log(filterConfig);

    var posts = main.getPhotoPosts(skip, top, filterConfig);

    DOMActions.generatePhotoPosts(posts);
};

var addPhotoPost = (post) => {
    if (main.addPhotoPost(post)) {
        DOMActions.addPhotoPost(post, main.getIndexPost(post));
    }
};

var editPhotoPost = (post, id) => {
    if (main.editPhotoPost(post, id)) {
        DOMActions.editPhotoPost(main.getIndexPhotoPost(main.getPhotoPost(id)), main.getPhotoPost(id));
    }
};

var removePhotoPost = (id) => {
    var indx = main.getIndexPhotoPost(main.getPhotoPost(id));
    if (main.removePhotoPost(id)) {
        DOMActions.removePhotoPost(indx);
    }
};

window.onload = () => {
    DOMActions.generateLog();
    DOMActions.generateNameList(main.getNames());
    DOMActions.generateTagList(main.getHashTags());
    genPhotoPosts();
};

//- Tests
addPhotoPost({
    id: '12',
    description: 'My photo)))',
    createdAt: new Date('2018-03-12T06:12:42'),
    author: 'Иванов Иван',
    photoLink: 'images/women.jpg',
    hashTags: ['like', 'lol', 'kek', 'chebyrek'],
    likes: ['sidssad', 'kesha']

});
