var newConcur = new JavaImporter(java.util, java.util.concurrent);
//extending using Java.type
var newCall = Java.type("java.util.concurrent.Callable");
with (newConcur) {
    var newExec = Executors.newCachedThreadPool();
    var newTasks = new LinkedHashSet();
    for (var x = 1; x < 200; x++) {
        var SampleTask = Java.extend(newCall, {
            call: function () {
                print("Result displayed as " + x)
            }
        });
        var newTaskA = new SampleTask();
        newTasks.add(newTaskA);
        newExec.submit(newTaskA);
    }
}//displays result
