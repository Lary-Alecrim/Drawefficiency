 import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;

@Component
public class TesteConexao implements CommandLineRunner {

    @Autowired
    private javax.sql.DataSource dataSource;

    @Override
    public void run(String... args) throws Exception {
        System.out.println("Conectado ao banco: " + dataSource.getConnection().getCatalog());
    }
} 

