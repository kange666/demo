/**
 * Created by kange666 on 2019/3/4.
 */
//单位换算方法
function getFileSize(fileByte) {
    var fileSizeByte = fileByte;
    var fileSizeMsg = "";

    if (fileSizeByte > 0 && fileSizeByte < 1024) fileSizeMsg = fileSizeByte + "B";
    else if (fileSizeByte == 1024) fileSizeMsg = "1KB";
    else if (fileSizeByte > 1024 && fileSizeByte < 1048576) fileSizeMsg = (fileSizeByte / 1024).toFixed(2) + "KB";
    else if (fileSizeByte == 1048576) fileSizeMsg = "1MB";
    else if (fileSizeByte > 1048576 && fileSizeByte < 1073741824) fileSizeMsg = (fileSizeByte / (1024 * 1024)).toFixed(2) + "MB";
    else if (fileSizeByte > 1048576 && fileSizeByte == 1073741824) fileSizeMsg = "1GB";
    else if (fileSizeByte > 1073741824 && fileSizeByte < 1099511627776) fileSizeMsg = (fileSizeByte / (1024 * 1024 * 1024)).toFixed(2) + "GB";
    else fileSizeMsg = "文件超过1TB";
    return fileSizeMsg;
}