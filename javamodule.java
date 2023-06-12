//기본모듈
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
//리액트 네이티브 연결용
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;


public class FirewallManager extends ReactContextBaseJavaModule {
    CalendarModule(ReactApplicationContext context) {
       super(context);
   }
    @Override
    public String getName(){
        return "FirewallManager"
   }
    public static void blockDomain(String domain) {
        try {
            // iptables 명령 실행
            String command = "iptables -A OUTPUT -d " + domain + " -j DROP";
            executeCommand(command);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void unblockDomain(String domain) {
        try {
            // iptables 명령 실행
            String command = "iptables -D OUTPUT -d " + domain + " -j DROP";
            executeCommand(command);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static void executeCommand(String command) throws IOException {
        // Runtime을 사용하여 명령 실행
        Process process = Runtime.getRuntime().exec(command);
        BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));

        String line;
        while ((line = reader.readLine()) != null) {
            // 명령 실행 결과 출력
            System.out.println(line);
        }

        // 프로세스 종료
        process.destroy();
    }
}