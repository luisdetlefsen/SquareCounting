package kickstart;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

public class KickstartA {

    boolean allEven(long n) {
        String s = String.valueOf(n);
        for (char c : s.toCharArray()) {
            if (Integer.valueOf(c) % 2 != 0) {
                return false;
            }
        }
        return true;
    }

    public int f(long n) {
        int up = 0, down = 0;
        long n2 = n, n3 = n;
        while (!allEven(n2)) {
            n2++;
            up++;
        }
        while (!allEven(n3)) {
            n3--;
            down++;
        }
        return Math.min(up, down);
    }

    public String solve(long n, int c) {
        return "Case #" + c + ": " + f(n);
    }

    public static void main(String[] args) {
        FileWriter writer = null;
        KickstartA a = new KickstartA();

        try (BufferedReader reader = new BufferedReader(new FileReader("C:\\ks\\as.txt")); BufferedWriter buffer = new BufferedWriter(new FileWriter("C:\\ks\\outas.txt"))) {
            String line = null;
            int t = 0;
            line = reader.readLine();
            int T = Integer.parseInt(line);
            while (t < T) {
                line = reader.readLine();
                buffer.write(a.solve(Long.valueOf(line), ++t));
                buffer.newLine();
            }
            //buffer.flush();
          //  writer.close();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }

    }
}
