import os
import hashlib
import json
import base64
 

def get_md5_by_string(_str):
   
    return hashlib.md5(_str.encode('utf-8')).hexdigest()
    #str.encode(encoding="utf-8")
    #_str = _str.encode('ascii', 'ignore')
    #return hashlib.md5(_str).hexdigest()
    
# 签名MD5+base64
def get_md5__base64(_str):
    m = hashlib.md5()
    m.update(_str.encode("utf-8"))
    data_digest = m.digest()
    data_digest = base64.b64encode(data_digest).decode("utf-8")
    return data_digest
    
def get_md5_by_filePath(file_path):
    hash_md5 = hashlib.md5()
    with open(file_path, "rb") as file:
        for chunk in iter(lambda: file.read(4096), b""):
            hash_md5.update(chunk)
    return hash_md5.hexdigest()
    
#获得文件utf8的md5码
def get_md5_utf8_by_filePath(file_path):
     _str = get_string_by_filePath(file_path)
     return get_md5_by_string(_str)
    
    #获得文件utf8的md5码+base64
def get_md5_utf8_base64_by_filePath(file_path):
     _str = get_string_by_filePath(file_path)
     return get_md5__base64(_str)
    

    
def get_string_by_filePath(file_path):
    content = ""
    # 打开文件
    with open(file_path, 'r', encoding='utf-8', errors='replace') as file:
    #with open(file_path, 'r', encoding='ascii', errors='replace') as file:
        # 读取文件内容
        content = file.read()
   
    return content
  
    
def createDir(path):
    if os.path.exists(path):
        pass
    else:
        os.makedirs(path)
        


 
def main(directory):
    
    # 创建一个空字典用于存储文件名与MD5码的对应关系
    md5_dict = {}
    excluded_dirs = {"ChangeHost"} #忽略的文件夹
    md5 = ""
    md5Version = ""
    for root, dirs, files in os.walk(directory):
        #print(f"rootPath:{root}")
        # 检查当前目录是否在排除列表中
        if any(root == os.path.join(directory, ex) for ex in excluded_dirs):
            print(f"continue rootPath:{root}")
            continue  # 如果在排除列表中，则跳过当前目录
            
        for file_name in files:
            if file_name.find("md5.") > -1 :# 包含md5的文件忽略
                continue
            if file_name.find(".bat") > -1 :#忽略.bat文件   
                continue
            if file_name == "readme.txt":#忽略 readme.txt  //
                continue
            if file_name == "index_pwa.html":#忽略 index_pwa.html  //
                continue
            if file_name.find(".ico") > -1 :#忽略 favicon.ico  忽略icon
                continue
            if root.find("ignore") > -1 :
                continue
            file_path = os.path.join(root, file_name)
            md5 = get_md5_by_filePath(file_path)
            print(f"MD5({file_name}) = {md5}  file_path:{file_path}")
            #md5 = get_md5_utf8_base64_by_filePath(file_path)
            #print(f"MD5__base64({file_name}) = {md5}  file_path:{file_path}")
            #md5 = get_md5_utf8_by_filePath(file_path)
            #print(f"MD5_UTF_8({file_name}) = {md5}  file_path:{file_path}")
            
            if(file_path.startswith(directory)):
                file_path = file_path.replace(directory,"",1);
            
            
            file_path = file_path.replace("\\","/")
            md5_dict[file_path] = md5;
            md5Version += md5;
            
    #本次的版本 md5码  所有文件md5的md5
    md5Version = get_md5_by_string(md5Version)
    md5_dict["md5Version"] = md5Version
    print(f"md5Version = {md5Version} ")
    return md5_dict
            
if __name__ == "__main__":
    #directory = "/path/to/your/folder"  # 替换为你的文件夹路径
    directory = "./"#当前文件夹   替换为你的文件夹路径
    
    filePath_Md5_txt = "./md5.txt";
    #directory="./savePath"
    md5_dict = main(directory)
    # 将字典转换为JSON字符串
    json_data = json.dumps(md5_dict)
    
    # 将JSON字符串写入到文件中
    with open(filePath_Md5_txt, 'w') as file:
        file.write(json_data)
    
    
    