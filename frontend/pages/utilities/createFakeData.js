import { v4 as uuidv4 } from 'uuid';

let status = { 0: "success", 1: "fail", 2: "processing" };
let types = { 0: "Athena", 1: "EMR", 2: "QuickSight" };

function generateTasks(srcfile, maxsnap = 5, expiLen = 30) {
    let tasks = [];
    let iter = parseInt(Math.random() * maxsnap) + 2;

    for (let index = 0; index < iter; index++) {
        let id = uuidv4();
        let initDay = new Date(Date.now() - Math.random() * expiLen * 86400 * 1000);
        let type = types[Math.round(Math.random() * 2)];
        let success = status[Math.round(Math.random() * Math.random())];
        let loc = '/buckets1/snaps/2022/03/11/';

        let temp = {
            id: id,
            name: srcfile + '_Task_' +  (index+1),
            loc: loc,
            init: initDay.toUTCString(),
            parent : srcfile,
            type: type,
            status: success,
            snap_rpolicy: expiLen,
            children: null,
        };
        tasks.push(temp);
    }

    return tasks;
}

function generateSnaps(srcfile, maxsnap = 5, expiLen = 30) {
    let snaps = [];
    let iter = parseInt(Math.random() * maxsnap) + 2;

    for (let index = 0; index < iter; index++) {
        let date = parseInt(Math.random() * 28) + 1;
        let month = parseInt(Math.random() * 11) + 1;
        let id = uuidv4();
        let type = types[Math.round(Math.random() * 2)];
        let snapfile = srcfile.toString() + "_" + type + '_2022_' +  month.toString() + '_' + date.toString();
        let initDay = new Date(Date.now() - Math.random() * expiLen * 86400 * 1000);
        let success = status[Math.round(Math.random() * Math.random())];
        let loc = '/buckets1/snaps/2022/03/11/';
        let tasklist = generateTasks(snapfile);

        let temp = {
            id: id,
            name: snapfile + ".parquet",
            parent : srcfile,
            loc: loc,
            amount: getRandomFloat(100, 400, 2),
            init: initDay.toUTCString(),
            status: success,
            type: type,
            snap_rpolicy: expiLen,
            children: tasklist,
        };
        snaps.push(temp);
    }
    return snaps;
}

function getRandomFloat(min, max, decimals) {
    const str = (Math.random() * (max - min) + min).toFixed(decimals);

    return parseFloat(str);
}

function generateSources(length, expiLen = 30) {
    let sources = [];

    while (length > 0) {
        let srcfile = "userdata" + parseInt(Math.random() * 100).toString();
        let snapslist = generateSnaps(srcfile);
        let initDay = new Date(Date.now() - Math.random() * expiLen * 86400 * 1000);
        let loc = '/buckets1/file/2022/03/11/';

        let temp = {
            id: uuidv4(),
            name: srcfile + ".csv",
            loc: loc,

            region: "us-east-1",
            amount: getRandomFloat(100, 400, 2),
            init: initDay.toUTCString(),

            children: snapslist,
            src_rpolicy: expiLen,
            src_gpolicy: 1,

            snap_rpolicy: expiLen,
        }
        sources.push(temp);

        length--;
    }
    return sources;
}

export default function createFakeData(length = 10) {
    let srcs = generateSources(length);
    return srcs;
}