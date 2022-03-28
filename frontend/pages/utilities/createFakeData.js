import {v4 as uuidv4} from 'uuid';

let status = { 0 : "success", 1 : "fail", 2 : "processing" };
let types = { 0 : "Athena", 1 : "EMR", 2 : "QuickSight"};

function generateSnaps(srcfile, maxsnap=5, expiLen=30) {
    let snaps = [];
    let iter = parseInt(Math.random() * maxsnap) + 2;

    for (let index = 0; index < iter; index++) {
        let id = uuidv4();
        let tid = uuidv4();
        let snapfile = srcfile.toString()+"_"+id.toString()+".parquet";
        let initDay = new Date(Date.now() - Math.random() * expiLen * 86400 * 1000);
        let expiDay = new Date(Date.now() + Math.random() * expiLen * 86400 * 1000);
        let type = types[Math.round(Math.random() * 2)]; 
        let success = status[Math.round(Math.random() * Math.random())]; 
        let loc = '/buckets1/snaps/2022/03/11/';
 
        let temp = {
            id : id,
            tid : tid,
            loc : loc ,
            amount : getRandomFloat(100, 400, 2),
            name : snapfile,
            init : initDay.toUTCString(),
            expi : expiDay.toUTCString(),
            type : type,
            status : success, 
            snap_rpolicy : expiLen,
        };
        snaps.push(temp);
    }
    return snaps;
}

function getRandomFloat(min, max, decimals) {
    const str = (Math.random() * (max - min) + min).toFixed(decimals);
  
    return parseFloat(str);
  }

function generateSources(length, expiLen=30) {
    let sources = [];

    while (length > 0) {
        let srcfile = "userdata"+parseInt(Math.random() * 100).toString();
        let snapslist = generateSnaps(srcfile);
        let initDay = new Date(Date.now() - Math.random() * expiLen * 86400 * 1000);
        let expiDay = new Date(Date.now() + Math.random() * expiLen * 86400 * 1000);

        let temp = {
            id : uuidv4(),
            region : "us-east-1",
            loc : '/buckets1/file/2022/03/11/' ,
            amount : getRandomFloat(100, 400, 2),
            name : srcfile+".csv",
            init : initDay.toUTCString(),
            expi : expiDay.toUTCString(),
            src_rpolicy : expiLen,
            src_gpolicy : 1,
            snaps : snapslist, 
            snap_rpolicy : expiLen,
        }
        sources.push(temp);

        length--;
    } 
    return sources;
}

export default function createFakeData(length=10) {
    let srcs = generateSources(length);
    return srcs;
}