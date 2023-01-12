/*
🎬 Video playlist UI Design like Skillshare With Vanilla JavaScript
👨🏻‍⚕️ By: Coding Design

You can do whatever you want with the code. However if you love my content, you can subscribed my YouTube Channel
🌎link: www.youtube.com/codingdesign
*/

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': '3 الدعوم ولمقومات (1)',
        'name': '3 الدعوم ولمقومات (1).mp4',
        'duration': '25:11',
    },
    {
        'id': 'a2',
        'title': '2 الدعوم ولمقومات (1)',
        'name': '2 الدعوم ولمقومات (1).mp4',
        'duration': '15:29',
    },
    {
        'id': 'a3',
        'title': '4 NFTs المنصات المختلفة لشراء_720p (1)',
        'name': '4 NFTs المنصات المختلفة لشراء_720p (1).mp4',
        'duration': '6:58',
    },

    {
        'id': 'a4',
        'title': '2 (رمز غير قابل للاستبدال) NFTما هو_720p (1)',
        'name': '2 (رمز غير قابل للاستبدال) NFTما هو_720p (1).mp4',
        'duration': '7:17',
    },
    {
        'id': 'a5',
        'title': '4 الترند  rsi  (1)',
        'name': '4 الترند  rsi  (1).mp4',
        'duration': '27:22',
    },
    {
        'id': 'a6',
        'title': '5 Opensea كيفية الشراء من موقع_720p (1)',
        'name': '5 Opensea كيفية الشراء من موقع_720p (1).mp4',
        'duration': '15:45',
    },
    {
        'id': 'a7',
        'title': '5 دايفرجنز وترند (1)',
        'name': '5 دايفرجنز وترند (1).mp4',
        'duration': '37:22',
    },

    {
        'id': 'a8',
        'title': '6 موفنج افريج',
        'name': '6 موفنج افريج.mp4',
        'duration': '30:55',
    },
    {
        'id': 'a9',
        'title': '07 مراجعة (1)',
        'name': '07 مراجعة (1).mp4',
        'duration': '2:13:11',
    },


    {
        'id': 'a10',
        'title': '7 NFTs كيف أحصل على المشاريع المربحة في_720p (1)',
        'name': '7 NFTs كيف أحصل على المشاريع المربحة في_720p (1).mp4',
        'duration': '12:18',
    },


    {
        'id': 'a11',
        'title': '7-1 اشكال الشموع',
        'name': '7-1 اشكال الشموع.mp4',
        'duration': '54:45',
    },


    {
        'id': 'a12',
        'title': '7-2 الاشكال الهندسية',
        'name': '7-2 الاشكال الهندسية.mp4',
        'duration': '48:25',
    },


    {
        'id': 'a13',
        'title': '08 مراجعة  (1)',
        'name': '08 مراجعة  (1).mp4',
        'duration': '1:55:01',
    },



    {
        'id': 'a14',
        'title': '8 فيبوناتشي',
        'name': '8 فيبوناتشي.mp4',
        'duration': '42:12',
    },

    {
        'id': 'a15',
        'title': '10 الزوايا السعرية (1)',
        'name': '10 الزوايا السعرية (1).mp4',
        'duration': '50:40',
    },




    {
        'id': 'a16',
        'title': '11 مراجعة (1)',
        'name': '11 مراجعة (1).mp4',
        'duration': '2:08:02',
    },


    {
        'id': 'a17',
        'title': '3 NFT؟ احذر ! مخاطر NFTs كيف يتم تقدير سعر_720p (1)',
        'name': '3 NFT؟ احذر ! مخاطر NFTs كيف يتم تقدير سعر_720p (1).mp4',
        'duration': '16:10',
    },


    {
        'id': 'a18',
        'title': 'download binance (1)',
        'name': 'download binance (1).mp4',
        'duration': '00:47',
    },




    {
        'id': 'a19',
        'title': 'insha 7sab (1)',
        'name': 'insha 7sab (1).mp4',
        'duration': '4:38',
    },







    {
        'id': 'a20',
        'title': 'LONGSHORT (1)',
        'name': 'LONGSHORT (1).mp4',
        'duration': '1:47',
    },


    {
        'id': 'a21',
        'title': 'trS (1)',
        'name': 'trS (1).mp4',
        'duration': '2:15',
    },


    {
        'id': 'a22',
        'title': 'USDT',
        'name': 'USDT.mp4',
        'duration': '1:36',
    },


    {
        'id': 'a23',
        'title': 'ادارة راس مال (1)',
        'name': 'ادارة راس مال (1).mp4',
        'duration': '1:21',
    },



    {
        'id': 'a24',
        'title': 'الفرق بين العقود الاجلة و الفوري (1)',
        'name': 'الفرق بين العقود الاجلة و الفوري (1).mp4',
        'duration': '1:48',
    },




    {
        'id': 'a25',
        'title': 'الفرق بين المعزول والمتبادل (1)',
        'name': 'الفرق بين المعزول والمتبادل (1).mp4',
        'duration': '1:20',
    },




    {
        'id': 'a26',
        'title': 'الفرق بين المعزول والمتبادل+شرح عن الرفع المالية (1)',
        'name': 'الفرق بين المعزول والمتبادل+شرح عن الرفع المالية (1).mp4',
        'duration': '2:49',
    },





    {
        'id': 'a27',
        'title': 'ايقاف الارباح (1)',
        'name': 'ايقاف الارباح (1).mp4',
        'duration': '1:30',
    },



    {
        'id': 'a28',
        'title': 'تحويل العة (1)',
        'name': 'تحويل العة (1).mp4',
        'duration': '0:33',
    },



    {
        'id': 'a29',
        'title': 'manipulate text background',
        'name': 'manipulate text background.mp4',
        'duration': '2:47',
    },


    {
        'id': 'a30',
        'title': 'تحويل المال من المحفظة الي العقود الاجلة (1)',
        'name': 'تحويل المال من المحفظة الي العقود الاجلة (1).mp4',
        'duration': '1:05',
    },

    {
        'id': 'a31',
        'title': 'حساب وهمي (1)',
        'name': 'حساب وهمي (1).mp4',
        'duration': '1:47',
    },
    {
        'id': 'a32',
        'title': 'حسب توصية (1)',
        'name': 'حسب توصية (1).mp4',
        'duration': '4:08',
    },
    {
        'id': 'a33',
        'title': 'شرح عن الرفع المالية (1)',
        'name': 'شرح عن الرفع المالية (1).mp4',
        'duration': '1:26',
    },
    {
        'id': 'a34',
        'title': 'شرح عن بايننس (1)',
        'name': 'شرح عن بايننس (1).mp4',
        'duration': '0:47',
    },
    {
        'id': 'a35',
        'title': 'شرح عن توصيات (1)',
        'name': 'شرح عن توصيات (1).mp4',
        'duration': '1:57',
    },
    {
        'id': 'a36',
        'title': 'شرح واجهة العقود (1)',
        'name': 'شرح واجهة العقود (1).mp4',
        'duration': '1:52',
    },
    {
        'id': 'a37',
        'title': 'طريقة اغلاق الصفقة في الفوري   2 (1)',
        'name': 'طريقة اغلاق الصفقة في الفوري   2 (1).mp4',
        'duration': '0:42',
    },
    {
        'id': 'a38',
        'title': 'طريقة اغلاق الصفقة في الفوري (1)',
        'name': 'طريقة اغلاق الصفقة في الفوري (1).mp4',
        'duration': '2:29',
    },
    {
        'id': 'a39',
        'title': 'طريقة ايقاف الارباح و الخسائر في العقود الاجلة   2 (1)',
        'name': 'طريقة ايقاف الارباح و الخسائر في العقود الاجلة   2 (1).mp4',
        'duration': '2:09',
    },
    {
        'id': 'a40',
        'title': 'طريقة ايقاف الارباح و الخسائر في العقود الاجلة (1)',
        'name': 'طريقة ايقاف الارباح و الخسائر في العقود الاجلة (1).mp4',
        'duration': '2:23',
    },
    {
        'id': 'a41',
        'title': 'طريقة تحويل من شخص إلي آخر (1)',
        'name': 'طريقة تحويل من شخص إلي آخر (1).mp4',
        'duration': '1:28',
    },
    {
        'id': 'a42',
        'title': 'كيف استثمر (1)',
        'name': 'كيف استثمر (1).mp4',
        'duration': '1:49',
    },
    {
        'id': 'a43',
        'title': 'كيف تبدأ شغل (1)',
        'name': 'كيف تبدأ شغل (1).mp4',
        'duration': '4:43',
    },
    {
        'id': 'a44',
        'title': 'كيف تحسب العملات لوحدك (1)',
        'name': 'كيف تحسب العملات لوحدك (1).mp4',
        'duration': '1:24',
    },
    {
        'id': 'a45',
        'title': 'كيف تسحب المصاري و تحولهم لحساب البنك (1)',
        'name': 'كيف تسحب المصاري و تحولهم لحساب البنك (1).mp4',
        'duration': '1:28',
    },
    {
        'id': 'a46',
        'title': 'كيف تشتري usdt (1)',
        'name': 'كيف تشتري usdt (1).mp4',
        'duration': '1:32',
    },
    {
        'id': 'a47',
        'title': 'كيف تشتري عقود الاجلة عن طريق توصية (1)',
        'name': 'كيف تشتري عقود الاجلة عن طريق توصية (1).mp4',
        'duration': '6:50',
    },
    {
        'id': 'a48',
        'title': 'كيف تشتري عمله في العقود الاجلة (1)',
        'name': 'كيف تشتري عمله في العقود الاجلة (1).mp4',
        'duration': '5:09',
    },
    {
        'id': 'a49',
        'title': 'كيف تشتري عقود الاجلة عن طريق توصية (1)',
        'name': 'كيف تشتري عقود الاجلة عن طريق توصية (1).mp4',
        'duration': '2:53',
    },
    {
        'id': 'a50',
        'title': 'كيف تشتري عمله في العقود الاجلة مراجعة (1)',
        'name': 'كيف تشتري عمله في العقود الاجلة مراجعة (1).mp4',
        'duration': '2:00',
    },
    {
        'id': 'a51',
        'title': '',
        'name': '.mp4',
        'duration': '2:47',
    },
    {
        'id': 'a52',
        'title': 'كيف تشتري عمله في الفوري  2 (1)',
        'name': 'كيف تشتري عمله في الفوري  2 (1).mp4',
        'duration': '1:08',
    },
    {
        'id': 'a53',
        'title': 'كيف تشتري عمله في الفوري (1)',
        'name': 'كيف تشتري عمله في الفوري (1).mp4',
        'duration': '5:51',
    },
    {
        'id': 'a54',
        'title': 'كيف تشتري عمله من التوصيات (1)',
        'name': 'كيف تشتري عمله من التوصيات (1).mp4',
        'duration': '1:22',
    },
    {
        'id': 'a55',
        'title': 'كيف تعرف انك ربحت بالعقود الاجلة (1)',
        'name': 'كيف تعرف انك ربحت بالعقود الاجلة (1).mp4',
        'duration': '1:44',
    },
    {
        'id': 'a56',
        'title': 'كيف تعرف انك ربحت بالفوري (1)',
        'name': 'كيف تعرف انك ربحت بالفوري (1).mp4',
        'duration': '00:52',
    },
    {
        'id': 'a57',
        'title': 'كيف تغلق الصفقة في المعقود الاجلة (1)',
        'name': 'كيف تغلق الصفقة في المعقود الاجلة (1).mp4',
        'duration': '00:52',
    },
    {
        'id': 'a58',
        'title': 'كيف تكسب والسوق نازل  2 (1)',
        'name': 'كيف تكسب والسوق نازل  2 (1).mp4',
        'duration': '1:25',
    },
    {
        'id': 'a59',
        'title': 'كيف تمشي على التوصيات في العقود الاجلة    2 (1)',
        'name': 'كيف تمشي على التوصيات في العقود الاجلة    2 (1).mp4',
        'duration': '1:13',
    },
    {
        'id': 'a60',
        'title': 'كيف سحب الارباح عن طريق المكاتب (1)',
        'name': 'كيف سحب الارباح عن طريق المكاتب (1).mp4',
        'duration': '1:04',
    },





























































];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="images/play.svg" alt="">
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'images/pause.svg';

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'images/play.svg';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'images/pause.svg';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});
