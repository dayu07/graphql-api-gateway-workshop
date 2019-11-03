package workshop.gateway;

import graphql.schema.DataFetchingEnvironment;
import io.vertx.core.json.JsonObject;

import java.util.Map;

public class EnvironmentUtil {

  public static <T> T getInputArgument(DataFetchingEnvironment env, String name, Class<T> inputType) {
    Map<String, Object> argument = env.getArgument(name);
    return new JsonObject(argument).mapTo(inputType);
  }

  public static Integer getIntegerArgument(DataFetchingEnvironment env, String name) {
    String argument = env.getArgument(name);
    return argument!=null ? Integer.valueOf(argument):null;
  }
}
