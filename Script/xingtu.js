/*******************************
醒图vip
脚本名称:醒图vip（可用版本v5.6.0）
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
*******************************

[rewrite_local]
^http[s]?:\/\/commerce-api.faceu.mobi\/commerce\/v1\/subscription\/user_info.+$ url script-response-body https://raw.githubusercontent.com/Army121/Quantumult-x/main/Script/xingtu.js

[mitm] 
hostname = *.faceu.*

*******************************/

var obj = JSON.parse($response.body);
    obj.data.flag= true;
obj.data.end_time= 1843114830780;
obj.data.start_time=  1653726030780;
    $done({body: JSON.stringify(obj)});
