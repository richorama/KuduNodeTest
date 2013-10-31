# Kudo Node Test

A repository to test Windows Azure Web Site deployments of large node projects.

To deploy on Azure, make sure you have the XPlat tools set up, and type the following.

```
$ azure site create FooBar --git
$ git clone https://github.com/richorama/KuduNodeTest.git
$ git push azure master
```
