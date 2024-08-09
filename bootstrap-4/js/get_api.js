function get_data_channel_me(){
    $.ajax({
        url: 'https://www.googleapis.com/youtube/v3/channels',
            type: 'get',
            dataType: 'json',
            data: {
                'part': 'snippet,statistics',
                'id': 'UCKK77T8hoGV4eL_4yU6C4EQ',
                'key' : 'AIzaSyBupg8Jw3-nDDNrPa8OFge7QjPoqGXuG_A',
            },
            success: function (result) {
                let youtubeProfilePicture = result.items[0].snippet.thumbnails.medium.url
                $('#ytProfile').append(`
                    <img src="`+ youtubeProfilePicture +`" width="100" alt="" class="rounded-circle img-thumbnail">
                `)

                let channelName = result.items[0].snippet.title
                let subscriberNumber = result.items[0].statistics.subscriberCount

                $('#ytChannel').prepend(`
                    <h5>`+ channelName +`</h5>
                    <p>`+ subscriberNumber +` Subscriber</p>
                `)
            }
    })
}

function get_latest_video_me(){
    $.ajax({
            url: 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyBupg8Jw3-nDDNrPa8OFge7QjPoqGXuG_A&channelId=UCKK77T8hoGV4eL_4yU6C4EQ&maxResults=1&order=date&part=snippet',
            type: 'get',
            dataType: 'json',
            success: function (result) {
                let latestVideoId = result.items[0].id.videoId
                $('#latestVideo').append(`
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/`+ latestVideoId +`?rel=0" allowfullscreen></iframe>
                `)
            }
    })
}

function get_data_channel_unpas(){
    $.ajax({
        url: 'https://www.googleapis.com/youtube/v3/channels',
            type: 'get',
            dataType: 'json',
            data: {
                'part': 'snippet,statistics',
                'id': 'UCkXmLjEr95LVtGuIm3l2dPg',
                'key' : 'AIzaSyBupg8Jw3-nDDNrPa8OFge7QjPoqGXuG_A',
            },
            success: function (result) {
                let youtubeProfilePicture = result.items[0].snippet.thumbnails.medium.url
                $('#ytProfile_unpas').append(`
                    <img src="`+ youtubeProfilePicture +`" width="100" alt="" class="rounded-circle img-thumbnail">
                `)

                let channelName = result.items[0].snippet.title
                let subscriberNumber = result.items[0].statistics.subscriberCount

                $('#ytChannel_unpas').prepend(`
                    <h5>`+ channelName +`</h5>
                    <p>`+ subscriberNumber +` Subscriber</p>
                `)
            }
    })
}

function get_latest_video_unpas(){
    $.ajax({
            url: 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyBupg8Jw3-nDDNrPa8OFge7QjPoqGXuG_A&channelId=UCkXmLjEr95LVtGuIm3l2dPg&maxResults=1&order=date&part=snippet',
            type: 'get',
            dataType: 'json',
            success: function (result) {
                let latestVideoId = result.items[0].id.videoId
                $('#latestVideo_unpas').append(`
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/`+ latestVideoId +`?rel=0" allowfullscreen></iframe>
                `)
            }
    })
}

function get_data_channel_nuri(){
    $.ajax({
        url: 'https://www.googleapis.com/youtube/v3/channels',
            type: 'get',
            dataType: 'json',
            data: {
                'part': 'snippet,statistics',
                'id': 'UCwtyjsjuCs6uUK6y_i8u1Iw',
                'key' : 'AIzaSyBupg8Jw3-nDDNrPa8OFge7QjPoqGXuG_A',
            },
            success: function (result) {
                let youtubeProfilePicture = result.items[0].snippet.thumbnails.medium.url
                $('#ytProfile_nuri').append(`
                    <img src="`+ youtubeProfilePicture +`" width="100" alt="" class="rounded-circle img-thumbnail">
                `)

                let channelName = result.items[0].snippet.title
                let subscriberNumber = result.items[0].statistics.subscriberCount

                $('#ytChannel_nuri').prepend(`
                    <h5>`+ channelName +`</h5>
                    <p>`+ subscriberNumber +` Subscriber</p>
                `)
            }
    })
}

function get_latest_video_nuri(){
    $.ajax({
            url: 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyBupg8Jw3-nDDNrPa8OFge7QjPoqGXuG_A&channelId=UCwtyjsjuCs6uUK6y_i8u1Iw&maxResults=1&order=date&part=snippet',
            type: 'get',
            dataType: 'json',
            success: function (result) {
                let latestVideoId = result.items[0].id.videoId
                $('#latestVideo_nuri').append(`
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/`+ latestVideoId +`?rel=0" allowfullscreen></iframe>
                `)
            }
    })
}


function get_data_channel_adel(){
    $.ajax({
        url: 'https://www.googleapis.com/youtube/v3/channels',
            type: 'get',
            dataType: 'json',
            data: {
                'part': 'snippet,statistics',
                'id': 'UCjq_mZca9XzAE8dD05Dgtpw',
                'key' : 'AIzaSyBupg8Jw3-nDDNrPa8OFge7QjPoqGXuG_A',
            },
            success: function (result) {
                let youtubeProfilePicture = result.items[0].snippet.thumbnails.medium.url
                $('#ytProfile_adel').append(`
                    <img src="`+ youtubeProfilePicture +`" width="100" alt="" class="rounded-circle img-thumbnail">
                `)

                let channelName = result.items[0].snippet.title
                let subscriberNumber = result.items[0].statistics.subscriberCount

                $('#ytChannel_adel').prepend(`
                    <h5>`+ channelName +`</h5>
                    <p>`+ subscriberNumber +` Subscriber</p>
                `)
            }
    })
}

function get_latest_video_adel(){
    $.ajax({
            url: 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyBupg8Jw3-nDDNrPa8OFge7QjPoqGXuG_A&channelId=UCjq_mZca9XzAE8dD05Dgtpw&maxResults=1&order=date&part=snippet',
            type: 'get',
            dataType: 'json',
            success: function (result) {
                let latestVideoId = result.items[0].id.videoId
                $('#latestVideo_adel').append(`
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/`+ latestVideoId +`?rel=0" allowfullscreen></iframe>
                `)
            }
    })
}

get_data_channel_me()
get_latest_video_me()
get_data_channel_unpas()
get_latest_video_unpas()
get_data_channel_nuri()
get_latest_video_nuri()
get_data_channel_adel()
get_latest_video_adel()
