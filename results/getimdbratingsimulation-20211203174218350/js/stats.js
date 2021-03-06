var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20",
        "ok": "18",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "2093",
        "ok": "2093",
        "ko": "60007"
    },
    "maxResponseTime": {
        "total": "60009",
        "ok": "8683",
        "ko": "60009"
    },
    "meanResponseTime": {
        "total": "11011",
        "ok": "5567",
        "ko": "60008"
    },
    "standardDeviation": {
        "total": "16448",
        "ok": "2049",
        "ko": "1"
    },
    "percentiles1": {
        "total": "5945",
        "ok": "5281",
        "ko": "60008"
    },
    "percentiles2": {
        "total": "7872",
        "ok": "7657",
        "ko": "60009"
    },
    "percentiles3": {
        "total": "60007",
        "ok": "8470",
        "ko": "60009"
    },
    "percentiles4": {
        "total": "60009",
        "ok": "8640",
        "ko": "60009"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 18,
    "percentage": 90
},
    "group4": {
    "name": "failed",
    "count": 2,
    "percentage": 10
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.328",
        "ok": "0.295",
        "ko": "0.033"
    }
},
contents: {
"req_get-film-rating-1ada7": {
        type: "REQUEST",
        name: "Get film rating by id",
path: "Get film rating by id",
pathFormatted: "req_get-film-rating-1ada7",
stats: {
    "name": "Get film rating by id",
    "numberOfRequests": {
        "total": "20",
        "ok": "18",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "2093",
        "ok": "2093",
        "ko": "60007"
    },
    "maxResponseTime": {
        "total": "60009",
        "ok": "8683",
        "ko": "60009"
    },
    "meanResponseTime": {
        "total": "11011",
        "ok": "5567",
        "ko": "60008"
    },
    "standardDeviation": {
        "total": "16448",
        "ok": "2049",
        "ko": "1"
    },
    "percentiles1": {
        "total": "5945",
        "ok": "5281",
        "ko": "60008"
    },
    "percentiles2": {
        "total": "7872",
        "ok": "7657",
        "ko": "60009"
    },
    "percentiles3": {
        "total": "60007",
        "ok": "8470",
        "ko": "60009"
    },
    "percentiles4": {
        "total": "60009",
        "ok": "8640",
        "ko": "60009"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 18,
    "percentage": 90
},
    "group4": {
    "name": "failed",
    "count": 2,
    "percentage": 10
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.328",
        "ok": "0.295",
        "ko": "0.033"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
