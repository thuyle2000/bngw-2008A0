//importing packages
var imports = new JavaImporter(java.util, java.io, java.nio.file);
with (imports) {
    var samplePaths = new LinkedList();
    print(samplePaths instanceof LinkedList);//true  
    samplePaths.add("newDoc 1"); 
    samplePaths.add("newDoc 2"); 
    samplePaths.add("newDoc 3"); 
    print(samplePaths)// [newDoc1, newDoc2, newDoc3]

    for (var  i = 0; i < samplePaths.size(); i++) {
        var p = FileSystems.getDefault().getPath(samplePaths.get(i));
        Files.write(p, "test case \n".getBytes());
    }
}//displays result
